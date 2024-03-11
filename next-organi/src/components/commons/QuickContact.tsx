import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QuickContact() {
  return (
    <ul className="flex">
        <li className="mr-5">
            <div className="flex items-center justify-center rounded-full bg-slate-200 w-[45px] h-[45px]">
                <FontAwesomeIcon icon={faPhone} className="w-4"/>
            </div>
        </li>
        <li>
            <div className="w-full">
                <span className="font-bold">+65 11.188.888</span>
            </div>
            <div className="w-full">
                <span className="w-full text-xs text-gray-500">support 24/7 time</span>
            </div>
        </li>
    </ul>
  )
}
