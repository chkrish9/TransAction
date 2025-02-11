import Header from "@/components/header";
import TotalBalance from "@/components/totalBalance";
import React from "react";

const loggedIn = { firstName: "Murali" };

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficently."
          />
        </header>
        <TotalBalance
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
        />
      </div>
    </section>
  );
};

export default Home;
