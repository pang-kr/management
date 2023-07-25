import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://picsum.photos/64",
    name: "아야카",
    birthday: "961213",
    gender: "여",
    job: "간호사",
  },
  {
    id: 2,
    image: "https://picsum.photos/64",
    name: "정수창",
    birthday: "950104",
    gender: "남",
    job: "개발자",
  },
  {
    id: 3,
    image: "https://picsum.photos/64",
    name: "김현우",
    birthday: "940407",
    gender: "남",
    job: "기획자",
  },
];

function App() {
  return (
    <div>
      {customers.map((e) => {
        return (
          <Customer
            key={e.id}
            id={e.id}
            image={e.image}
            name={e.name}
            birthday={e.birthday}
            gender={e.gender}
            job={e.job}
          />
        );
      })}
    </div>
  );
}

export default App;
