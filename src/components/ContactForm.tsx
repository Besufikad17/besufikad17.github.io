export default function ContactForm() {
  return (
    <div className="form">
      <div className="form-card">
        <form>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="subject" />
          <textarea placeholder="message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
