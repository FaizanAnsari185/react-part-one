import Nav from "./Nav";

const Header = ({ num }) => {
  console.log(user);

  return (
    <div className="bg-purple-200 p-4">
      Header{user}
      <Nav num={num} />
    </div>
  );
};

export default Header;
