import React from "react";
import Button from "../../../../components/Button/Button";
import Table from "../../../../components/Table/Table";
import mockData from "../../../../mocks/mocks";

const Forums = ({ className }) => {
  const { forums } = mockData;
  return (
    <section className={`${className} text-center mb-5`}>
      <div className="wrapper">
        <h2 className="text-center mb-4">Forums</h2>
        <Table
          cols={[
            { header: "Topics", name: "topics" },
            { header: "Category", name: "category" },
            { header: "Author", name: "author" },
            { header: "Replies", name: "replies" },
            { header: "Views", name: "views" },
            { header: "Last Post", name: "lastPost" }
          ]}
          rows={forums}
        />
        <div className="text-center">
          <Button className="btn btn-light btn-outline-dark rounded-0">
            Browse Forums
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Forums;
