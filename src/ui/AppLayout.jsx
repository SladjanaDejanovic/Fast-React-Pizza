import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  // navigation state can be idle, loading, submitting
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid-rows-[auto_1fr_auto] grid h-screen">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-auto">
      <main className="max-w-3xl mx-auto">
        <Outlet />
      </main></div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
