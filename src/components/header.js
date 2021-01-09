const Header = ({ data }) => {
  let {
    coverImage: { small }
  } = data.data[2].attributes;

  return (
    <div className="header">
      <h1>Responive Fetch Api with SWR hooks</h1>
      <img className="headerImage" src={small} alt="poster" />
    </div>
  );
};

export default Header;
