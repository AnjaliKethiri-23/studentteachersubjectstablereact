import Students from "./tables/students";
import Subjects from "./tables/subjects";
import Teachers from "./tables/teachers";

const App = () => {
    return (
        <div>
            <Students />
            <Teachers />
            <Subjects/>
        </div>
    );
};

export default App;