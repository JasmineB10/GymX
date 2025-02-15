import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
   page: string;
   selectedPage: SelectedPage;
   setSelectedPage : (value :SelectedPage) => void;
}

function Link({page, selectedPage, setSelectedPage}: Props) {

    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage ;
  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage ? "text-orange-600" : ""} 
    transition duration-500 hover:text-orange-400`}
    href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage)}>
        {page}
    </AnchorLink>
  )
}

export default Link