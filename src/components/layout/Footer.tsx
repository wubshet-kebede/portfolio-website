import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const SOCIALS = [
  {
    name: "GitHub",
    link: "https://github.com/wubshet-kebede/",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/wubshet-kebede",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    link: "mailto:wubshet2829@gmail.com",
    icon: FaEnvelope,
  },
];

const Footer = () => {
  return (
    <footer
      className=" w-full border-t border-white/10 bg-background
      "
    >
      <div className=" max-w-7xl mx-auto   px-6  py-10  flex  flex-col md:flex-row justify-between items-center gap-6">
        {/* Identity */}
        <div className="text-center md:text-left">
          <h3 className=" text-lg font-bold text-text">Wbshet Ayellew</h3>
          <p className="text-xs text-text-muted mt-2 ">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Socials */}
        <div
          className="
            flex
            gap-5
          "
        >
          {SOCIALS.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className=" text-text-muted hover:text-primary transition "
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
