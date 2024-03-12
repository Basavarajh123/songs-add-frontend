import Axios from 'axios'
import './SongsAdd.css'
import {Component} from 'react'


class SongsAdd extends Component{

    state={
        songUrl:'',
        tumbnalImageUrl:'',
        isInputError:false


    }


    handleInput=(event)=>{
        this.setState({
            [event.target.name]:[event.target.value]
        })
    }


    onSubmitSong =async(event)=>{
        event.preventDefault()

        const {songUrl,tumbnalImageUrl}= this.state

        if (songUrl ==='' || tumbnalImageUrl ===''){
            this.setState({
                isInputError:true
            })
        }else{
            await Axios.post('https://songs-app-o13l.onrender.com/add-songs',{songUrl,tumbnalImageUrl}).then(res=>alert('Song added')).catch(err=>console.log(err))
            this.setState({
                songUrl:'',
                tumbnalImageUrl:'',
            })
            
        }
    }


    render(){
        const{songUrl,tumbnalImageUrl,isInputError}= this.state
        return(
            <div className='app-container'>
                <form onSubmit={this.onSubmitSong} className='form-container'>
                    <section className='section-container'>
                        <label htmlFor='songUrl' className='label-text'>Song Url</label>
                        <input type='text' className='input-field' value={songUrl} placeholder='Enter the Songs Url' name='songUrl' id='songUrl' onChange={this.handleInput} />
                    </section>
                    <section className='section-container'>
                        <label htmlFor='tumbnalImageUrl' className='label-text'>Thumnail Image</label>
                        <input type='text' className='input-field' value={tumbnalImageUrl} placeholder='Enter ThumbnailImage Url' name="tumbnalImageUrl" id="tumbnalImageUrl" onChange={this.handleInput}/>
                    </section>
                    <button type='submit' className='btn'>Add Song</button>
                    {isInputError && <p className='error-text'>* Enter Valid Inputs</p>}
                </form>
              
            </div>
        )
    }
}

export default SongsAdd