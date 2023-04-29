import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import DropdownAPI from '../dropdownAPI/dropdownAPI'
import BreadCrumb from '../../reusableComponents/breadCrumb'

const TabTwoView = () => {
    // const [key, setKey] = useState('home');
    return (
        <>
            <BreadCrumb firstName='Tab One' link='/tab-two' secondName='View List' />

            <Tabs
                defaultActiveKey="View List"
                className="my-3"
            >
                <Tab eventKey="View List" title="View List">
                    <DropdownAPI />
                </Tab>
                <Tab eventKey="About" title="About">
                    <div>
                        <h4>About</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nisi culpa debitis at hic harum nobis molestiae ad impedit non quia in exercitationem nostrum, voluptate eaque quod veniam dolorum enim?</p>
                    </div>
                </Tab>
            </Tabs>
        </>
    )
}

export default TabTwoView