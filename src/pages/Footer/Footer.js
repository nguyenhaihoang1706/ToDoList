import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <span>
        You Have <span className="pendingNum"></span> Pendingtasks
      </span>
      <button>Clear All</button>
    </div>
  );
}

export default Footer;
