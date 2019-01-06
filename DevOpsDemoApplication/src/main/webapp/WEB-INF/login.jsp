<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>JavaDemoApplication</title>
<link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
<link rel="stylesheet" href="css/LoginPage.css" type="text/css" />
</head>
<body>
  <div class="wrapper">
    <div class="content">
      <div class="container-fluid">
     
        <div class="col-md-6 col-md-offset-3">
        <div class="login-div">
        <div style="text-align: center; padding-bottom: 25px">
        	<img alt="" src="images/KovairLogo-trans.png" height="20">
        </div>
          <div class="panel panel-primary" style="">
            <div class="panel-heading"><span><img src="images/key_PNG1174.png" height="20" width="20"/></span><b>Employee Management</b></div>
            <div class="panel-body" style="padding-top: 27px" >
              <form method="post" class="form-horizontal" action="UserServlet"  role="form">
                <div class="form-group">
                  <label class="control-label col-sm-4" for="UserId">User ID:</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" id="txtUserId" name="userId" placeholder="Enter User Id Here" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-4" for="Password">Password:</label>
                  <div class="col-sm-6">
                    <input type="password" class="form-control" id="txtPassword" name="password" placeholder="Enter Password Here" />

                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-4 col-sm-8">
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" />Keep me logged in</label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-4 col-sm-8">
                    <button id="btnClick" type="submit" class="btn btn-primary btn-md">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>