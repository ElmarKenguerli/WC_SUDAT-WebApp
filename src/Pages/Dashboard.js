

class DashboardLayout extends React.Component {

    render(){
      const { match } = this.props
      return(
        <>
            <div className="">
                <Header appTitle="React Multi Layout"/>
  
                <Footer />
            </div>
        </>
      )
   }
 }

 DashboardLayout.propTypes = {
     match: PropTypes.any.isRequired
 }

export default DashboardLayout