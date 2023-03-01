import {createContext, useState, useEffect} from 'react';

const WishlistContext = createContext();

export default WishlistContext;

export const WishlistContextProvider = ({ children }) => {
  
  const [wishlist, setWishlist] = useState([]);

  // useEffect(() => {
  //   setWishlist(localStorage.getItem('wishlist'));
  //   wishlistService.getUserWishlist.then((wishlist) => {
  //     setWishlist(wishlist);
  //   })
  // }, [])

  const removePlaceWishlist = (id) => {
    //checker si la place à insérer existe ou non dans le tableau de wishlist
    // avant de le supprimer
    // setWishlist(//?)
  }
  const addPlaceWishlist = (place) => {
    //checker si la place à insérer existe ou non dans le tableau de wishlist
    // avant de l'insérer
    setWishlist([...wishlist, place])
    // ...
  }

  const deleteWishlist = () => {
    setWishlist([])
  }

  const context = {
    removePlaceWishlist,
    addPlaceWishlist,
    deleteWishlist,
    wishlist
  }

  return (
  <WishlistContext.Provider value={context}>
    {children}
  </WishlistContext.Provider>
  )

}