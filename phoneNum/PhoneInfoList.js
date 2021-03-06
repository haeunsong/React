import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data:[]
    }
    render() {
        const {data,onRemove} = this.props;
        const list = data.map(
            arg => (
                <PhoneInfo 
                    onRemove={onRemove}
                    info={arg} 
                    key={arg.id}
                />)
        );
        // const list = data.map((contact,i)=>{
        //     return (<li>{contact.name} {contact.phone} {i}</li>)
        // })

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;