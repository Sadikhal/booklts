
import Container from "../Container";
import Logo from "./Logo";
import {Search} from "./Search";
// import Search from "./Search";


const Navbar = ({
}) => {
  return ( 
    <div className="fixed h-[87px] w-full bg-white z-10 shadow-sm">
      <Container>
        <div 
          className="
            flex 
             flex-row 
            items-center 
            justify-between h-full
            gap-3
            md:gap-0
            w-full
          "
        >
          <Logo />
          <Search/>
        </div>
      </Container>
    </div>
  );
}


export default Navbar;