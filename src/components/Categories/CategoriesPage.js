import React, { Component } from 'react';
import axios from 'axios';
import CategoryCard from './CategoryCard';

class CategoriesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catsList: [],
      error: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/api/v1/categories')
      .then((response) => {
        console.log(response.data);
        this.setState({
          catsList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: 'Error retrieving data',
        });
      });
  }

  render() {
    const { catsList, error } = this.state;
    return (
      <div>
        {catsList.length
          ? catsList.map((cat) => (
            <CategoryCard key={cat.id} category={cat.catname} />
          ))
          : null}
        {error ? <div>{error}</div> : null}
      </div>
    );
  }
}

export default CategoriesPage;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import CategoryCard from './CategoryCard';

// function CategoriesPage() {
//   const [cats, setCats] = useState(null);
//   useEffect(() => {
//     async function fetchData() { await axios.get(
//         'https://jsonplaceholder.typicode.com/users'
//       ).then(response => setCats(response.data));
//       console.log(cats);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       CategoriesPage
//       {cats && cats.map((cat) => <CategoryCard key={cat.id} category={cat} />)}
//     </div>
//   );
// }

// export default CategoriesPage;
