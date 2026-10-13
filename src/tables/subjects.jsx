
import React from "react";
import Heading from "../common/Heading";
import Table from "../common/Table";
import Button from "../common/Button";
import subjects from "../data/subjects";

const Subjects = () => {
    const columns = Object.keys(subjects[0]);

    return (
        <div>
            <Heading name={"Subjects"} />
            <Button value={"Add Subject"} />
            <Table cols={columns} data={subjects} />
        </div>
    );
};

export default Subjects;
