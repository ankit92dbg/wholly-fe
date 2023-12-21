import Link from "next/link";
import Layout from "../components/layout/Layout";

function Privacy() {
    return (
        <>
            <Layout title={"Privacy Policy"} parent="Home" sub="Pages" subChild="Privacy">
            <div className="page-content pt-150 pb-150">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-11 col-lg-11 col-md-12 m-auto">
                            <div className="row">
<p style={{fontWeight:'bold',fontSize:19,marginBottom:20}}>We protect your privacy.</p>

<p>Our privacy policy is simple: any information you give stays with us. We do not rent, sell, lend, or otherwise distribute your personal information to anyone for any reason. This includes your contact information, as well as specific order information.</p>

<p style={{fontWeight:'bold',fontSize:19,marginBottom:20,marginTop:20}}>We limit data access to those who need to know.</p>

<p>Within our organization, your data is accessible to only a limited number of employees with special access privileges. Although we may occasionally compile general demographic information based on your order, this information is shared within our organization only, and it has no identifiable personal data.</p>

<p style={{fontWeight:'bold',fontSize:19,marginBottom:20,marginTop:20}}> Information Collected</p>

<p>To enable you to place an order on our site, we need the following basic information about you: Your First Name, Last Name, and Your Address, City, Zip code, State, Country, Phone Number, and Contact E-mail E-mails.</p>

<p>Apart from this, our systems gather details about your computer’s internet connection, like your IP address when you visit our site. Your IP address does not identify you personally. We use this information to deliver our web pages to you upon request, customize our site as per your interest, calculate the number of visitors on our site, and know the geographic locations from where our visitors come.</p>

<p>We do not allow any unauthorized person or organization be it other members, visitors, and anyone not in our organization, to use any information collected from you.</p>

<p style={{fontWeight:'bold',fontSize:19,marginBottom:20,marginTop:20}}>Information Sharing</p>

<p>This is probably the most critical question in your mind as to whom do we share your information? The answer to this question is that we do not rent, sell, barter, or give away your information to anyone. To some extent, data has to be passed on to the courier companies, credit card processing companies, vendors, etc., to enable them to perform their functions related to your order fulfillment. Apart from this usual business requirement, we may also share information with law authorities for fraud detection and the safety of our site, employees, management, users, members, and other affiliates associated with us.</p>

<p style={{fontWeight:'bold',fontSize:19,marginBottom:20,marginTop:20}}>Information Usage</p>

<p>The most crucial usage of the information collected from you is your email we-email is used to inform you that your order has been confirmed/executed. Your email ie-mailo is used to notify you of your customer service-related queries and any newsletters sent. All other information collected is confidential and will not be disclosed unless needed as per the requirement of the law authorities or in case of any disputes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        </>
    );
}

export default Privacy;
