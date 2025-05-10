---
layout: default
title: Home
---

<section class="hero animate-fade-in">
    <div class="container">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate developer creating innovative solutions and beautiful digital experiences.</p>
        <div class="hero-buttons">
            <a href="/projects" class="btn btn-primary">View My Work</a>
            <a href="/contact" class="btn btn-outline">Get in Touch</a>
        </div>
    </div>
</section>

<section class="featured-projects">
    <div class="container">
        <h2 class="text-center mb-4">Featured Projects</h2>
        <div class="card-grid">
            <div class="card animate-fade-in">
                <img src="{{ '/assets/images/project1.png' | relative_url }}" alt="Project One">
                <div class="card-content">
                    <h3><i class="fas fa-code"></i> Project One</h3>
                    <p>A modern web application built with cutting-edge technologies.</p>
                    <div class="tech-stack">
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">Node.js</span>
                        <span class="tech-tag">MongoDB</span>
                    </div>
                    <a href="/projects#project-one" class="btn btn-outline">Learn More</a>
                </div>
            </div>
            <div class="card animate-fade-in">
                <img src="{{ '/assets/images/project2.png' | relative_url }}" alt="Project Two">
                <div class="card-content">
                    <h3><i class="fas fa-mobile-alt"></i> Project Two</h3>
                    <p>An innovative mobile app that solves real-world problems.</p>
                    <div class="tech-stack">
                        <span class="tech-tag">Flutter</span>
                        <span class="tech-tag">Firebase</span>
                        <span class="tech-tag">Dart</span>
                    </div>
                    <a href="/projects#project-two" class="btn btn-outline">Learn More</a>
                </div>
            </div>
            <div class="card animate-fade-in">
                <img src="{{ '/assets/images/project3.png' | relative_url }}" alt="Project Three">
                <div class="card-content">
                    <h3><i class="fas fa-paint-brush"></i> Project Three</h3>
                    <p>A beautiful and responsive website design.</p>
                    <div class="tech-stack">
                        <span class="tech-tag">HTML5</span>
                        <span class="tech-tag">CSS3</span>
                        <span class="tech-tag">JavaScript</span>
                    </div>
                    <a href="/projects#project-three" class="btn btn-outline">Learn More</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="skills-overview">
    <div class="container">
        <h2 class="text-center mb-4">My Expertise</h2>
        <div class="card-grid">
            <div class="card animate-fade-in">
                <div class="card-content">
                    <i class="fas fa-code"></i>
                    <h3>Web Development</h3>
                    <p>Creating responsive and modern web applications using the latest technologies.</p>
                    <div class="skill-progress">
                        <div class="progress-bar" style="width: 90%"></div>
                    </div>
                </div>
            </div>
            <div class="card animate-fade-in">
                <div class="card-content">
                    <i class="fas fa-paint-brush"></i>
                    <h3>UI/UX Design</h3>
                    <p>Designing intuitive and beautiful user interfaces that enhance user experience.</p>
                    <div class="skill-progress">
                        <div class="progress-bar" style="width: 85%"></div>
                    </div>
                </div>
            </div>
            <div class="card animate-fade-in">
                <div class="card-content">
                    <i class="fas fa-mobile-alt"></i>
                    <h3>Mobile Development</h3>
                    <p>Building cross-platform mobile applications that work seamlessly.</p>
                    <div class="skill-progress">
                        <div class="progress-bar" style="width: 80%"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="cta-section">
    <div class="container">
        <div class="cta-content text-center animate-fade-in">
            <h2>Let's Work Together</h2>
            <p>Have a project in mind? I'd love to hear about it.</p>
            <a href="/contact" class="btn btn-primary">Get in Touch</a>
        </div>
    </div>
</section> 