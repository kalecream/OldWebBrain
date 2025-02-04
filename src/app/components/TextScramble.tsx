import { useEffect, useRef } from "react";

class TextScramble {
  el: HTMLElement;
  chars: string;
  queue: Array<{ from: string; to: string; start: number; end: number; char?: string }>;
  frameRequest?: number;
  frame: number;
  resolve?: () => void;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = "!-\\/[]=+*^??????____";
    this.queue = [];
    this.frame = 0;
    this.update = this.update.bind(this);
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest!);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      const { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        const randomChar = char || this.randomChar();
        output += `<span class="dud">${randomChar}</span>`;
        this.queue[i].char = randomChar;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve && this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

interface TextScrambleComponentProps {
  phrases?: string[];
}

const TextScrambleComponent: React.FC<TextScrambleComponentProps> = ({ phrases }) => {
  const defaultPhrases = ["I am what I show up and do every day.", "Nothing more,<br/> nothing less."];

  const textRef = useRef<HTMLDivElement | null>(null);
  const fxRef = useRef<TextScramble | null>(null);
  let counter = useRef(0);
  const usedPhrases = phrases || defaultPhrases;

  useEffect(() => {
    if (textRef.current) {
      fxRef.current = new TextScramble(textRef.current);

      const next = () => {
        fxRef.current?.setText(usedPhrases[counter.current]).then(() => setTimeout(next, 1500));

        counter.current = (counter.current + 1) % usedPhrases.length;
      };

      next();
    }

    return () => cancelAnimationFrame(fxRef.current?.frameRequest!);
  }, [usedPhrases]);

  return <h1 ref={textRef} style={{ lineHeight: 1 }}></h1>;
};

export default TextScrambleComponent;
