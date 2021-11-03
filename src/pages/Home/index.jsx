import React, { useContext } from 'react'
import { GlobalContext } from '@context/GlobalContext'

import { Header } from '@containers/Header'
import { MenuIcon } from '@components/MenuIcon'
import { Categories } from '@components/Categories'
import { Logo } from '@components/Logo'
import { ShopCart } from '@components/ShopCart'
import { MenuDesktop } from '@containers/MenuDesktop'

import { MenuPortal } from '@containers/MenuPortal'
import { MenuMobile } from '@containers/MenuMobile'
import { ShoppingCart } from '@containers/ShoppingCart'
import { GoUpArrow } from '@components/GoUpArrow'

import { Main } from '@containers/Main'
import { MyOrders } from '@containers/MyOrders'
import { MyAccount } from '@containers/MyAccount'
import { EditAccount } from '@containers/EditAccount'
import { ProductDetails } from '@containers/ProductDetails'
import { Search } from '@containers/Search'
import { SearchProduct } from '@components/SearchProduct'
import { Order } from '@components/Order'
import { ProductsContainer } from '@containers/ProductsContainer'
import { MoreProducts } from '@components/MoreProducts'


export function Home() {

  const State = useContext( GlobalContext )

  return (

    <>

      <Header

        onMenuIcon={ () =>
          <MenuIcon
            visibleMenuMobile={ State.visibleMenuMobile }
            setVisibleMenuMobile={ State.setVisibleMenuMobile }
            setVisibleMenuDesktop={ State.setVisibleMenuDesktop }
            setShowMyOrders={ State.setShowMyOrders }
            setShowMyAccount={ State.setShowMyAccount }
            setShowEditAccount={ State.setShowEditAccount }
            setShowProductDetails={ State.setShowProductDetails }
            setShowProducts={ State.setShowProducts }

          />
        }

        onLogo={ () => <Logo /> }

        onCategories={ () => <Categories setCategories={ State.setCategories} /> }

        onShopCart={ () =>
          <ShopCart
            userLogin={ State.userLogin }
            userAccount={ State.userAccount }
            visibleMenuDesktop={ State.visibleMenuDesktop }
            setVisibleMenuDesktop={ State.setVisibleMenuDesktop }
            countCar={ State.countCar }
            setOpenShoppingCart={ State.setOpenShoppingCart }
            setShowMyOrders={ State.setShowMyOrders }
            setShowMyAccount={ State.setShowMyAccount }
            setShowEditAccount={ State.setShowEditAccount }
            setShowProductDetails={ State.setShowProductDetails }
            setShowProducts={ State.setShowProducts }

          />
        }

        onMenuDesktop={ () =>
          <MenuDesktop
            visibleMenuDesktop={ State.visibleMenuDesktop }
            setVisibleMenuDesktop={ State.setVisibleMenuDesktop }
            setUserLogin={ State.setUserLogin }
            setUserAccount={ State.setUserAccount }
            setShowMyOrders={ State.setShowMyOrders }
            setShowMyAccount={ State.setShowMyAccount }
            setShowEditAccount={ State.setShowEditAccount }
            setShowProductDetails={ State.setShowProductDetails }
            setShowProducts={ State.setShowProducts }
          />
        }

      />

      <MenuPortal render={ () =>
          <>
            <MenuMobile
              visibleMenuMobile={ State.visibleMenuMobile }
              setVisibleMenuMobile={ State.setVisibleMenuMobile }
              userLogin={ State.userLogin }
              setUserLogin={ State.setUserLogin }
              userAccount={ State.userAccount }
              setUserAccount={ State.setUserAccount }
              setShowMyOrders={ State.setShowMyOrders }
              setShowMyAccount={ State.setShowMyAccount }
              setShowEditAccount={ State.setShowEditAccount }
              setShowProductDetails={ State.setShowProductDetails }
              setShowProducts={ State.setShowProducts }
            />

            <ShoppingCart
              openShoppingCart={ State.openShoppingCart }
              setOpenShoppingCart={ State.setOpenShoppingCart }
              userAccount={ State.userAccount }
              userOrders={ State.userOrders }
              setUserOrders={ State.setUserOrders }
              saveOrder={ State.saveOrder }
              setCountCar={ State.setCountCar }
            />

          </>
        }
      />

      <Main

        showMyOrders={ State.showMyOrders }
        onMyOrders={ () =>
          <MyOrders
            userAccount={ State.userAccount }

            setShowMyOrders={ State.setShowMyOrders }
            setShowMyAccount={ State.setShowMyAccount }
            setShowEditAccount={ State.setShowEditAccount }
            setShowProductDetails={ State.setShowProductDetails }
            setShowProducts={ State.setShowProducts }
          />
        }

        showMyAccount={ State.showMyAccount }
        onMyAccount={ () =>
          <MyAccount
            userAccount={ State.userAccount }

            setShowMyOrders={ State.setShowMyOrders }
            setShowMyAccount={ State.setShowMyAccount }
            setShowEditAccount={ State.setShowEditAccount }
            setShowProductDetails={ State.setShowProductDetails }
            setShowProducts={ State.setShowProducts }
          />
        }

        showEditAccount={ State.showEditAccount }
        onEditAccount={ () =>
          <EditAccount
            userAccount={ State.userAccount }
            emptyInput={ State.emptyInput }
            emailAccountExist={ State.emailAccountExist }
            updateData={ State.updateData }

            setShowMyOrders={ State.setShowMyOrders }
            setShowMyAccount={ State.setShowMyAccount }
            setShowEditAccount={ State.setShowEditAccount }
            setShowProductDetails={ State.setShowProductDetails }
            setShowProducts={ State.setShowProducts }
          />
        }

        showProductDetails={ State.showProductDetails }
        onProductDetails={ () =>
          <ProductDetails
            userOrders={ State.userOrders }
            setUserOrders={ State.setUserOrders }
            setCountCar={ State.setCountCar }
            itemData={ State.itemData }

            setShowMyOrders={ State.setShowMyOrders }
            setShowMyAccount={ State.setShowMyAccount }
            setShowEditAccount={ State.setShowEditAccount }
            setShowProductDetails={ State.setShowProductDetails }
            setShowProducts={ State.setShowProducts }
          />
        }

        showProducts={ State.showProducts }
        onSearch={ () =>
          <Search
            onSearchProduct={ () => <SearchProduct setSearchedWord={ State.setSearchedWord } /> }
            onCategories={ () => <Categories setCategories={ State.setCategories} /> }
            onOrder={ () => <Order setProductsOrder={ State.setProductsOrder }/> }
          />
        }
        onProductsContainer={ () =>
          <ProductsContainer
            productApi={ State.productApi }
            productsOrder={ State.productsOrder }
            searchedWord={ State.searchedWord }
          />
        }
        onMoreProducts={ () => <MoreProducts /> }

        onGoUp={ () => <GoUpArrow/> }

      />

    </>

  )

}