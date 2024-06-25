import React from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    return (
        <div>
<Navbar/><br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Slno.</th>
                                    <th scope="col">Brand Name</th>
                                    <th scope="col">Model Name</th>
                                    <th scope="col">Manufacturing Year</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Samsung</td>
                                    <td>slno123</td>
                                    <td>2004</td>
                                    <td>30,000</td>
                                </tr>
                              
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Samsung</td>
                                    <td>slno123</td>
                                    <td>2004</td>
                                    <td>30,000</td>
                                </tr>
                               
                                
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Samsung</td>
                                    <td>slno123</td>
                                    <td>2004</td>
                                    <td>30,000</td>
                                </tr>
                               
                            </tbody>
                        </table>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Viewall
