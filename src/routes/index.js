import Login from "../views/Login";

import Index from "../views/Index";
import Machines from "../views/Machines";
import MachineDetails from "../views/MachineDetails";
import Locations from "../views/Locations";
import LocationsDetails from "../views/LocationsDetails";
import StockInventory from "../views/StockInventory";
import SalesUsage from "../views/SalesUsage";
import ProductDetails from "../views/ProductDetails";
import LocationSalesUsage from "../views/LocationSalesUsage";
import Companies from "../views/Companies";
import BottleDetails from "../views/BottleDetails";
import Customers from "../views/Customers";
import StockDetails from "../views/StockDetails";
import LocationsSubPage from "../views/LocationsSubPage";

import enabled from "../assets/images/dawaam/Dasboard enabled.png";
import machines from "../assets/images/dawaam/Machines enabled.png";
import locations from "../assets/images/dawaam/Locations enabled.png";
import bottles from "../assets/images/dawaam/Bottle Enabled.png";
import customers from "../assets/images/dawaam/customers enabled.png";
import stock from "../assets/images/dawaam/Stock enabled.png";
import products from "../assets/images/dawaam/Products enabled.png";

import sub_dashboard from "../assets/images/dawaam/sub dashboard.png";
import sub_machines from "../assets/images/dawaam/sub machines.png";
import sub_locations from "../assets/images/dawaam/sub locations.png";
import sub_bottles from "../assets/images/dawaam/sub bottles.png";
import sub_customers from "../assets/images/dawaam/sub customers.png";
import sub_stock from "../assets/images/dawaam/sub stock.png";
import sub_products from "../assets/images/dawaam/sub products.png";

let routes = [
  {
    path: "/",
    component: Login,
    layout: "auth",
  },
  {
    path: "/dashboard",
    component: Index,
    icon: enabled,
    icon_type: "image",
    name: "Dashboard",
    layout: "main",
    sub_icon: sub_dashboard,
  },
  {
    path: "/machines",
    name: "Machines",
    icon: machines,
    icon_type: "image",
    component: Machines,
    layout: "main",
    sub_icon: sub_machines,
  },
  {
    path: "/machine_details/:id",
    component: MachineDetails,
    isMenu: false,
    layout: "main",
  },
  {
    path: "/locations",
    name: "Locations",
    icon: locations,
    icon_type: "image",
    component: Locations,
    layout: "main",
    sub_icon: sub_locations,
  },

  {
    path: "/locations_details",
    component: LocationsDetails,
    layout: "main",
    isMenu: false,
  },
  {
    path: "/customers",
    component: Customers,
    name: "Customers",
    icon: customers,
    icon_type: "image",
    layout: "main",
    sub_icon: sub_customers,
    
  },
  {
    path: "/sales_usage",
    component: BottleDetails,
    name: "Bottle Details",
    icon: bottles,
    icon_type: "image",
    layout: "main",
    sub_icon: sub_bottles,
  },
  {
    path: "/stock_inventory",
    component: StockInventory,
    name: "Stock & details",
    icon: stock,
    icon_type: "image",
    layout: "main",
    sub_icon: sub_stock,
  },

  {
    path: "/location_sales_usage",
    component: LocationSalesUsage,
    isMenu: false,
    layout: "main",
  },
  {
    path: "/product_details",
    component: ProductDetails,
    name: "Product Details",
    icon: products,
    icon_type: "image",
    layout: "main",
    sub_icon: sub_products,
  },
  {
    path: "/companies",
    component: Companies,
    name: "Companies",
    icon: "fas fa-industry",
    icon_type: "icon",
    isAdmin: true,
    layout: "main",
  },
  {
    path: "/",
    name: "Logout",
    icon: "fas fa-sign-out-alt",
    icon_type: "icon",
    layout: "main",
  },
  {
    path: "/bottle-details",
    component: BottleDetails,
    layout: "main",
    isMenu: false,
  },
  {
    path: "/stock_details",
    component: StockDetails,
    layout: "main",
    isMenu: false,
  },
  {
    path: "/location_sub_page/:id",
    component: LocationsSubPage,
    layout: "main",
    isMenu: false,
  }
];
export default routes;
