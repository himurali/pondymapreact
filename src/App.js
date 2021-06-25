import React from 'react';
import { Navbar } from './components/Navbar';
import {Sidebar}  from './components/Sidebar'
import  MapCards from './components/MapCards';
import JustMap from './components/JustMap';
import 'mapbox-gl/dist/mapbox-gl.css';

class App extends React.Component {
	state = {
		booksData: []
	}

	componentDidMount() {
		fetch('https://api.airtable.com/v0/appWzBpm2npVPYQNl/Books?api_key=keyPvLfiaV4dBCcUf')
			.then(res => res.json())
			.then(res => {
				console.log(res.records)
				this.setState({ booksData: res.records })
			})
			.catch(error => console.log(error))
	}

	// render function will come here

  render() {
    const {booksData} = this.state;
        return (


			<div className="App">

			<Navbar />
			<div class="parent md:h-screen md:grid md:grid-cols-6 flex-1 flex  overflow-hidden">
  <section class="sidebar bg-gray-400 md:col-span-1 flex-1 overflow-y-scroll">
	  {booksData.map(book => (


						<div class="mb-4 w-full  border-t-4 border-red-400 rounded-b-lg rounded-t shadow-lg bg-white overflow-hidden">
							<div class="mt-4 mb-8 px-6 py-4">
								<MapCards {...book.fields} key={book.fields.id} />
							</div>
						</div>
			))}</section>
  <main class="main bg-blue-400 md:col-span-5"><JustMap booksData={booksData} ></JustMap></main>
</div>
			<div class="container mx-auto my-12 p-2 bg-gray-100">
			
			
			

		
		</div>

		
		</div>

             
        )
    }

    
}

export default App



  
 