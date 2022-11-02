import * as React from 'react';

export const Footer:React.FunctionComponent = () => {
  return (
    <footer>
      <p id="copyright">
        &copy; {new Date().getFullYear()} KaleCream LLC. All rights reserved.
      </p>
      
      <p id="contact">
        <a href="mailto:sabrinamedwinter@gmail.com"> &nbsp; Contact Us</a>
        </p>
    </footer>
  );
}
