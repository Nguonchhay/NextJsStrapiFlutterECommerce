import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageMenu from "./LanguageMenu";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faLinkedinIn, faPinterestP, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function MetaNav() {
  return (
    <div className="bg-slate-50">
      <div className="px-[7rem]">
        <div>
          <ul className="flex">
            <li>
              <FontAwesomeIcon icon={faEnvelope} size="1x" />
              <a href="mailto:hello@colorlib.com">hello@colorlib.com</a>
            </li>
            <li>
              Free Shipping for all Order of $99
            </li>
          </ul>
        </div>

        <div className="flex">
          <ul className="flex">
            <li>
              <ul className="flex">
                <li>
                  <FontAwesomeIcon icon={faFacebookF} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faTwitter} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faPinterestP} />
                </li>
              </ul>
            </li>
            <li>
              <LanguageMenu />
            </li>
            <li className="flex">
              <FontAwesomeIcon icon={faUser} />
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
