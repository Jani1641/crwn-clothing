import Directory from '../../components/directory/directory.component' 
import { Outlet } from 'react-router-dom';
const Home = () => {

  
const categories = [
  {
    id: 1,
    title: 'kitchen',
    imageUrl: 'https://images.livspace-cdn.com/w:400/h:791/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/03/04155642/Where-to-Save-_-Splurge-on-Your-Kitchen.png',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'sports',
    imageUrl: 'https://etimg.etb2bimg.com/photo/74881928.cms',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'office',
    imageUrl: 'https://media.architecturaldigest.com/photos/56b524de4ac3d842677b9ac0/master/w_2323,h_1548,c_limit/home-office-01.jpg',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'bins & baskets',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'shoes',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41PdV1qZQpL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg',
    route: 'shop/mens',
  },
];
  return (
    <div>
        <Directory categories={categories}/>
        <Outlet/>
    </div>
  );
}


export default Home;
