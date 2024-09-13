import mouse from "@styles/modules/ScrollDown.module.scss";

export const ScrollDown = () => {
  return (
    <div className={mouse.field}>
      <span className={mouse.label}>scroll down</span>
      <div className={mouse.mouse} />
    </div>
  );
};
