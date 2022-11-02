import * as React from 'react';

export const Footer:React.FunctionComponent = () => {
  return (
    <footer>
      <p id="copyright">
        &copy; {new Date().getFullYear()} KaleCream Limited. All rights reserved.
      </p>
    </footer>
  );
}
