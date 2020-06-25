import CodeBlock from './CodeSnippet'
import React from 'react'

class Blog extends React.Component {
    
    render() {
        const code = `
        import UIKit 
        import MapKit
        
          class HomeController: UIViewController {
        
            @IBOutlet weak var customTableView: UITableView?
        
            @override func viewDidLoad() {
              super.viewDidLoad()
              self.view.backgroundColor = .red
              setupTableViewController()
            }
        
            fileprivate func setupTableViewController() {
              self.customTableView.delegate = self
              self.customTableView.datasource = self
            }
        
            extension HomeController: UITableViewDelegate, UITableViewDatasource {
              @override func tableViewcellForRowAt(indexPath: IndexPath) -> UITableViewCell {
                let cell = table.dequeResuableCell(indexPath: indexpath) as! CustomCell
                return cell 
              }
            }
        }` 
        return(
            <div style = {{display: 'flex', justifyContent: 'center'}}>
                <CodeBlock lang = 'swift' code= {code} />
            </div>
        )
    }

}

export default Blog
