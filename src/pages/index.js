import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import './index.css'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="background" style={{
        backgroundImage: `url("${data.datoCmsIndex.testpic.url}")`
      }}>
    </div>
    <div className="container firstview">
        <h1>Hållbara trähus för framtiden. Idag.</h1>
        <h2>En lösning för att prefabricera marknadens mest energieffektiva och klimatsmarta byggnader. </h2>
        <div className="linkcontainerfv">
          <Link className="link1" to="/omoss/">Läs om hur idén föddes</Link>
        </div>
    </div>
    <div className="background2" style={{
        backgroundImage: `url("${data.datoCmsIndex.secondpic.url}")`
      }}>
    </div>
    <div className="secondinfo">
      <div className="row secondrow">
        <div className="col-md-6 col-12 sinfo1">
          <h3>Nästa generations trähus.</h3> 
        </div>
        <div className="col-md-6 col-12 sinfo2">
          <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat placerat magna sem tempor pretium mauris odio proin tempus. Condimentum venenatis sed nunc consequat, varius. Massa nunc ante nisi diam. Nullam dignissim et felis vel sit et felis. Sit magna urna non sodales. Eget eget proin mattis vel mauris lectus in at. Faucibus nunc, tempor, aliquet amet, consectetur. Quam morbi elit malesuada interdum dictum arcu nulla. Sit tempus vulputate nec ut dui ornare cursus enim mi. Feugiat morbi faucibus blandit commodo pellentesque.</p>
          {/* <a href="" className="alink">ullamcorper neque, lobortis felis.</a> */}
        </div>
      </div>
      <div className="usprow row">
        <div className="col-12 col-md-6 uspcontainer">
          <h4>Ett system för utmanande arkitektur</h4>
          <p className="usptext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat placerat magna sem tempor pretium mauris odio proin tempus. Condimentum venenatis sed nunc consequat, varius. </p>
          <div className="uspimgcontainer">
            <img className="uspimg" src={data.datoCmsIndex.usppic1.url} alt=""/>
          </div>
        </div>
        <div className="col-12 col-md-6 uspcontainer">
        <h4>Klimatsmart och energieffektivt.</h4>
        <p className="usptext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat placerat magna sem tempor pretium mauris odio proin tempus. Condimentum venenatis sed nunc consequat, varius. </p>
          <div className="uspimgcontainer fade-in">
            <img className="uspimg" src={data.datoCmsIndex.usppic2.url} alt=""/>
          </div>
        </div>
      </div>

      <div className="newsrow row">
        <div className="col-12 newscolumn">
          <div className="newscontainer">
            <a href="">
              <h6> 2020 - 08/17 </h6>
              <h5>Forskningsbidrag till byggföretag för att utveckla marknadens mest klimatsmarta väggar.</h5>
            </a>
          </div>
        </div>
      </div>

      <div className="projectcontainer container">
      <div className="project row">
          <h7>Starta ett projekt med oss.</h7>
          <h8>Fyll i information för att starta ett projekt med oss. </h8>
          <div className="projectform">

          </div>
      </div>
      </div>


      {/* <div className="row thirdrow">

        <div className="col-12 col-md-4 valuebox">
          <div className="imagecontainer">
            <img className="infoimg" src={data.datoCmsIndex.valuepic.url} alt=""/>
          </div>
          <h4>Tillåtande för utmanande arkitektur.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit dignissim vel vitae enim euismod ullamcorper neque, lobortis felis. Ut iaculis lacus, urna egestas bibendum enim vivamus tincidunt. </p>
        </div>

        <div className="col-12 col-md-4 valuebox">
          <div className="imagecontainer">
            <img className="infoimg" src={data.datoCmsIndex.valuepic2.url} alt=""/>
          </div>
          <h4>Klimatneutral produktion.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit dignissim vel vitae enim euismod ullamcorper neque, lobortis felis. Ut iaculis lacus, urna egestas bibendum enim vivamus tincidunt. </p>
        </div>

        <div className="col-12 col-md-4 valuebox">
          <div className="imagecontainer">
            <img className="infoimg" src={data.datoCmsIndex.valuepic3.url} alt=""/>
          </div>
          <h4>Energieffektivitet med passivhusstandard. </h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit dignissim vel vitae enim euismod ullamcorper neque, lobortis felis. Ut iaculis lacus, urna egestas bibendum enim vivamus tincidunt. </p>
        </div>

      </div> */}
      {/* <div className="row fourthrow">
        <a href="" className="intresse">Lämna en intresseanmälan för ditt hållbara byggprojekt. </a>
      </div> */}


      <div className="footerimgcontainer">
          <img className="footerimg" src={data.datoCmsFooter.footerimg.url} alt=""/>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
    query {
      datoCmsIndex {
        testpic{
          url
        }
        secondpic{
          url
        }
        valuepic{
          url
        }
        valuepic2{
          url
        }
        valuepic3{
          url
        }
        usppic1{
          url
        }
        usppic2{
          url
        }
    }
    datoCmsFooter {
      footerimg{
        url
      }
    } 
  }
`;

export default IndexPage
