import React, { Component } from 'react';

class Certifications extends Component {

    render() {
        if (this.props.data) {
            var  link = "https://www.credly.com/badges/21c76cf0-c87f-472d-9955-19a085b228f1";
        }

        return (
            <section id="certs">
                <div className="row ">
                    <div className="three columns header-col"> 
                        <h1 ><span>Certifications</span></h1>
                    </div>
                    <div className='nine columns main-col'>
                        <div className="three columns main-col certDisplay">
                            <a target="_blank" href="https://www.credly.com/badges/21c76cf0-c87f-472d-9955-19a085b228f1"><img src="images/AWSSAA.png"/> </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }


}


export default Certifications;