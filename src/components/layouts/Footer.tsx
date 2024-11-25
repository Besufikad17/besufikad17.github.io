import twitterIcon from "../../assets/images/twitter.svg";
import telegramIcon from "../../assets/images/baseline-telegram.svg";
import githubIcon from "../../assets/images/github (1).svg";
import linkedIcon from "../../assets/images/linkedin.svg";

export default function Footer() {

  const socials = [
    [twitterIcon, "https://twitter.com/besumicheal"],
    [telegramIcon, "https://t.me/Itachiinthesky"],
    [githubIcon, "https://github.com/Besufikad17"],
    [linkedIcon, "https://www.linkedin.com/in/besufikad-tilahun-6592281b4"]
  ];

  return (
    <div className="footer-container">
      <div className="left-side">
        <p>@2023 Besufikad Micheal</p>
      </div>
      <div className="center">
        <p>besumicheal@gmail.com</p>
        <p>0973132132</p>
        <p>Addis Ababa, Ethiopia</p>
      </div>
      <div className="right-side">
        <div className="icons-row">
         {socials.map((social, i) => {
            return(
              <a href={social[1]} key={i}>
                <img
                  src={social[0]}
                  alt=""
                  width="20px"
                  height="20px"
                />
              </a>
            )
         })}
        </div>
      </div>
    </div>
  );
}
