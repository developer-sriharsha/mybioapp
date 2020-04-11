import React, { Component } from 'react'
import Particles from 'react-particles-js';

export default class Particle extends Component {
    render() {
        return (
            <div>
                  <Particles 
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
                backgroundImage: `url(https://images.pexels.com/photos/3888585/pexels-photo-3888585.jpeg?cs=srgb&dl=dark-clouds-in-the-sky-3888585.jpg&fm=jpg)` 
              }}
            />
            </div>
        )
    }
}
