import * as React from "react";
import {useEffect, useState} from "react";
import Layout from "../components/Layout";
import ReactPaginate from "react-paginate";

const IndexPage = () => {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [post, setPost] = useState({ title: "", body: "" });

 useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setPosts(data);
    }).catch((error) => alert(error.message));
 }, []);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = posts.slice(startIndex, endIndex);

  const handlePageChange = ({ selected: page }) => {
    setCurrentPage(page);
  }

  const handleSubmit = async (event) => {
    //event.preventDefault();
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: post.title,
        body: post.body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
      .then((post) => {
        setPosts((data) => [post, ...data]);
        setPost({ title: "", body: "" });
      });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPost(values => ({...values, [name]: value}));
  }

  return (
    <Layout>
      <h3>CRUD de Posts</h3>
      <div className="conteiner">
        <form>
          Title: <input type="text" name="title" value={post.title} onChange={handleChange} />
          &nbsp;Body : <input type="text" name="body" value={post.body} onChange={handleChange} />
          <button type="button" onClick={handleSubmit}>Add Post</button>
        </form>
      </div>
      <ReactPaginate
        activeClassName={"item_active"}
        breakLabel={'...'}
        containerClassName={'pagination'}
        nextLabel={">>"}
        onPageChange={handlePageChange}
        pageCount={totalPages}
        previousLabel={"<<"}
      />
      {currentItems.map(item => (
        <div key={item.id} className="post">
          <h4>{item.id} - {item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
