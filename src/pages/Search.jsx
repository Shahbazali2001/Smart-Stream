import React from 'react'

const Search = () => {
  return (
    <main>
        <h1>Search Page</h1>
        <form>
          <label htmlFor="search">Search:</label>
          <input type="text" id="search" name="search" />
          <button type="submit">Search</button>
        </form>
      <p>This is the Search page.</p>
    </main>
  )
}

export default Search