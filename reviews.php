<?php
require_once('php/db.php');

$query = "select * from storedata";

$result = mysqli_query($con, $query);

?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reviews</title>
  <link rel="stylesheet" href="project_css/review.css" />
  <link rel="stylesheet" href="project_css/basic.css" />
  <link rel="stylesheet" href="project_css/utilities.css" />
  <link rel="stylesheet" href="project_css/footer.css" />
  <script src="https://kit.fontawesome.com/0e6a9590f5.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="project_css/navbar.css" />
  <link rel="shortcut icon" href="photos/logo.jpeg" type="image/x-icon" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
</head>

<body>
  <!-- Testimonials -->
  <header class="head">
    <div class="navbars top" id="navbars">
      <h1 class="logo top">
        <a href="main.html"><img src="./photos/logo3.png" style="width: 100%; height: auto; max-width: 200px" /></a>
      </h1>
      <nav class="circle">
        <ul>
          <li><a href="main.html">Home</a></li>
          <li><a href="aboutus.html">About</a></li>
          <li><a href="profile.html">Profile</a></li>
          <li>
            Products
            <ul class="types">
              <li><a href="clothing2.html">Clothing</a></li>
              <li><a href="electronics.html">Electronics</a></li>
              <li><a href="grocery.html">Grocery</a></li>
            </ul>
          </li>
          <li><a href="reviews.html">Reviews</a></li>
          <li><a href="contact_us.html">Contact Us</a></li>
        </ul>
      </nav>
    </div>
    <section class="reviews">
      <h1 class="customer">Customer Reviews</h1>
      <div class="box-container">
        <?php
        while ($col = mysqli_fetch_assoc($result)) {
          ?>
          <div class="box">
            <p>
              <?php echo $col['Review'] ?>
            </p>
            <?php
            $i = 1;

            echo "<img class='profile' src='https://source.unsplash.com/random/?Face/&1' alt='' />";
            $i++;

            ?>
            <h3>
              <?php echo $col['Username'] ?>
            </h3>
            <div class="stars">
              <?php
              for ($i = 0; $i < $col['Stars']; $i++) {
                echo "<i style = 'color: #000000;' class='fa-solid fa-star'></i>";
              }
              ?>
            </div>
          </div>
          <?php
        }
        ?>
      </div>
    </section>
  </header>
  <!-- FOOTER -->
  <footer class="footer">
    <div class="social">
      <a href="#" class="fab fa-facebook fa-2x"></a>
      <a href="#" class="fab fa-twitter fa-2x"></a>
      <a href="#" class="fab fa-instagram fa-2x"></a>
      <a href="#" class="fab fa-linkedin fa-2x"></a>
    </div>
    <div class="links">
      <a href="main.html">Home</a>
      <a href="aboutus.html">About us</a>
      <a href="profile.html">Profile</a>
      <a href="main.html">Products</a>
      <a href="reviews.html">Reviews</a>
      <a href="contact_us.html">Contact Us</a>
    </div>
    <div class="credits">Copyrights &copy; 2022 - Starbuys</div>
  </footer>
  <script>
    const navbar = document.getElementById("navbars");
    window.onscroll = function () {
      if (window.pageYOffset > 100) {
        navbar.classList.remove("top");
      } else {
        navbar.classList.add("top");
      }
    };
  </script>
</body>

</html>