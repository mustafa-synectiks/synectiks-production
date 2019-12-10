import React, { useEffect } from "react"
import Header from "./Header"
import $ from "jquery"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  useEffect(() => {
    $(function($) {
      let url = window.location.href
      $(".dropdown-item").each(function() {
        if (this.href === url) {
          $(this)
            .parents(".nav-item")
            .find(".nav-link")
            .addClass("active")
        }
      })
    })

    // Cookie Strip
    $(document).ready(function() {
      $("#hide").click(function() {
        $(".content").hide()
      })
    })

    $(document).ready(function() {
      $("#otherservice").hide()
    })
    // $("#otherservice").style.display = "none";
    $("#service").change(function() {
      var val = $(this).val()
      $("#otherservice").hide()
      if (val == "Others") {
        $("#otherservice").show()
        // $("#otherservice").style.display = "block";
      } else {
        $("#otherservice").hide()
      }
    })

    $(document).ready(function() {
      $("#othersource").hide()
    })
    $("#source").change(function() {
      var val = $(this).val()
      $("#othersource").hide()
      if (val == "Othersource") {
        $("#othersource").show()
      } else {
        $("#othersource").hide()
      }
    })
  })
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
