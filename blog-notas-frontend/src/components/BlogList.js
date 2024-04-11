import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogNotas, setblogNotas] = useState([]);

  useEffect(() => {
    fetchblogNotas();
  }, []);

  const fetchblogNotas = () => {
    axios.get('/api/blog-notas') 
      .then((response) => {
        setblogNotas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteblogNotas = (title, id) => {
    axios.delete(`/api/blog-notas/${id}`)
    .then(() => {
      // refresh the list of blogNotas
      fetchblogNotas();
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <div>
      <Link to="/add">
        <button className="button" type="button">
          Add notas
        </button>
      </Link>
      <h2>Blog List</h2>
      <ul>
        {blogNotas.map((notas) => (
          <li key={notas._id}>
            {notas.title} by {notas.artist} <Link to={`/edit/${notas._id}`}>Edit</Link> <Link onClick={ () => { if (window.confirm(`Are you sure you want to delete ${notas.title}`)) deleteblogNotas(notas.title, notas._id) } }>Delete</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
