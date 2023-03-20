import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-3">
        <div className="row">
          {
            Array(3).fill(null).map(() => {
              return (
                <div className="col-sm-4 bg-dark">
                  <h5 style={{ color: '#ffffff' }}>Column 1</h5>
                  <ul className="list-unstyled" style={{ color: '#999999' }}>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                  </ul>
                </div>
              )
            })
          }
        </div>
        <hr />
        <div className="text-center" style={{ backgroundColor: '#111111' }}>
          <p style={{ color: '#999999' }}>&copy; 2023 Example Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
