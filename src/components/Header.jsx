import Header from 'react';

const Header = ( props) => {
  console.log(props);
  const {name , brand} = props;
    return(
      <div>
        <h2>
         {brand} {name}
        </h2>
      </div>
    )
}
export default Header;