---
layout: default
title: Contact
---
# Contact
<div class="container">
    <p>Thanks for taking an interest in my skills!</p>
    <p>I will happily take opportunity to expand my skill set.</p>
    <p>Feel free to email me at <a href="mailto:it@wojciech-paluch.pl">it@wojciech-paluch.pl</a> or via contact form below.</p>
</div>

<div class="mailform">
    <form id="form" action="https://formspree.io/hudy0070@gmail.com" method="POST">

        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name..">

        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your email..">
        <p id="emailValid" class="validate"></p>
        <label for="message">Message</label>
        <textarea id="message" name="message" placeholder="Write something.." style="height:200px"></textarea>
        <p id="messageValid" class="validate"></p>
        <input id="sub" type="submit" value="Submit" />
    </form>
</div>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js"></script>
<script type="text/javascript" src="assets/submitMail.js"></script>
