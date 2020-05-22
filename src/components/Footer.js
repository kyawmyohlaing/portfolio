import React, {Component} from 'react';


class Footer extends Component{
    render(){
        return(
            <div>
                <section id="footer-cta">
			<h2 class="text-center">Wanna work with me?</h2>
			<p></p>
			<div class="row text-center">
				<div class="small-12 medium-8 medium-offset-2 columns">
					<p class="text-center">I'm currently available for work.</p>
				</div>
				<div class="small-12 columns" id="startButtonDiv">
					<a class="my-button form-button" href="mailto:kyawmyohlaing99@gmail.com">Start Now</a>
				</div>
			</div>
		</section>

		<footer id="footer">
			<div class="row text-center">
				<div class="small-12 medium-6 medium-offset-3 columns">
					<p id="logo">JW</p>
					<p id="copyright">Copyright &copy; 2020 | Kyaw Myo Hlaing</p>
				</div>
			</div>
		</footer>

            </div>
        )
    }
}
export default Footer;