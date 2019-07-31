import React, {Component} from 'react';
import PropTypes from 'prop-types';
const renderField = ({input, placeholder, type, meta: {asyncValidating, touched, error}, t}) => {
    return (
        <div>
            <div style={{position: 'relative'}}>
                <input {...input} className="form-control input-acphoto" placeholder={placeholder} type={type}
                       autoComplete="off"/>
                {asyncValidating ? <i className="font-loader fa fa-spinner fa-pulse fa-fw"/> : ''}
                {touched && ((error && <div>
                    <div className="text-center" style={{marginTop: '-8px'}}>
                        <div className={`${Config.getPrefixContent('arrow-up')} arrow-up display-inline-block`}/>
                    </div>
                    <div className={`${Config.getPrefixContent('bg-yellow')} field-message-error animated`} style={{marginTop: '-5px'}}>{t(`${error}`)}</div>
                </div>))}
            </div>
        </div>)
};


class renderInputField extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {



        return(
            <div>
                <div style={{position: 'relative'}}>
                    <input {...input} className="form-control input-acphoto" placeholder={placeholder} type={type}
                           autoComplete="off"/>
                    {asyncValidating ? <i className="font-loader fa fa-spinner fa-pulse fa-fw"/> : ''}
                    {touched && ((error && <div>
                        <div className="text-center" style={{marginTop: '-8px'}}>
                            <div className={`${Config.getPrefixContent('arrow-up')} arrow-up display-inline-block`}/>
                        </div>
                        <div className={`${Config.getPrefixContent('bg-yellow')} field-message-error animated`} style={{marginTop: '-5px'}}>{t(`${error}`)}</div>
                    </div>))}
                </div>
            </div>
        )
    }

}

renderInputField.propTypes = {
    //header: PropTypes.bool,
};

renderInputField.defaultProps = {
    //header: true,
};




export default renderInputField;