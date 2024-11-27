const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export async function sendEmail(data: ContactForm) {
    const raw = JSON.stringify({
      "head": {
        "to": "besumicheal@gmail.com",
        "from": data.email,
        "subject": data.subject
      },
      "body": data.message
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };
    
    fetch(`${import.meta.env.VITE_MAILER_URL}/send-email`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        throw error;
      });
}
