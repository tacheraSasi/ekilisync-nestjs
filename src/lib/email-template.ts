export const ekiliSyncEmailTemplate = (
  type,
  title,
  message,
  buttonLink = '#',
  buttonText = 'Take Action',
  companyName = 'EkiliSync',
  logoUrl = 'https://relay.ekilie.com/img/favicon.png',
) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  <head>
  <!-- Head content remains the same as original -->
  <style type="text/css">
  /* Same CSS styles as original */
  </style>
  </head>
  <body id="body" class="t43" style="min-width:100%;Margin:0px;padding:0px;background-color:#F9F9F9;">
  <div class="t42" style="background-color:#F9F9F9;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center">
      <tr><td class="t41" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#F9F9F9;" valign="top" align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable">
          <tr><td>
            <div class="t35" style="mso-line-height-rule:exactly;mso-line-height-alt:70px;line-height:70px;font-size:1px;display:block;">&nbsp;</div>
          </td></tr>
          <tr><td align="center">
            <table class="t39" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
              <tr>
                <td class="t38" style="background-color:#FFFFFF;border:1px solid #CECECE;overflow:hidden;width:400px;border-radius:20px;">
                  <table class="t37" role="presentation" cellpadding="0" cellspacing="0" width="100%">
                    <tr><td class="t36" style="padding:50px 40px 40px 40px;">
                      <!-- Logo Section -->
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr><td align="center">
                          <a href="${companyName.toLowerCase()}.com" target="_blank">
                            <img style="display:block;border:0;height:auto;width:60px;Margin:0;" 
                                 width="60" height="60" alt="${companyName} Logo" 
                                 src="${logoUrl}"/>
                          </a>
                        </td></tr>
                      </table>
  
                      <div class="t5" style="mso-line-height-rule:exactly;line-height:40px;font-size:1px;display:block;">&nbsp;</div>
  
                      <!-- Title -->
                      <h1 style="margin:0;font-family:Inter,sans-serif;line-height:28px;font-weight:600;font-size:24px;color:#111111;text-align:center;">
                        ${title}
                      </h1>
  
                      <div class="t12" style="mso-line-height-rule:exactly;line-height:17px;font-size:1px;display:block;">&nbsp;</div>
  
                      <!-- Message Content -->
                      <p style="margin:0;font-family:Inter,sans-serif;line-height:22px;font-weight:500;font-size:15px;color:#424040;text-align:center;">
                        ${message}
                      </p>
  
                      ${
                        type !== 'alert'
                          ? `
                      <div class="t18" style="mso-line-height-rule:exactly;line-height:40px;font-size:1px;display:block;">&nbsp;</div>
                      
                      <!-- Action Button -->
                      <table role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;">
                        <tr><td style="background-color:#0057FF;overflow:hidden;width:154px;border-radius:8px;">
                          <a href="${buttonLink}" style="display:block;padding:10px 20px;font-family:Inter,sans-serif;line-height:40px;font-weight:700;font-size:15px;color:#FFFFFF;text-decoration:none;text-align:center;">
                            ${buttonText}
                          </a>
                        </td></tr>
                      </table>
                      `
                          : ''
                      }
  
                      <!-- Footer Text -->
                      <div class="t24" style="mso-line-height-rule:exactly;line-height:40px;font-size:1px;display:block;">&nbsp;</div>
                      <p style="margin:0;font-family:Inter,sans-serif;line-height:22px;font-weight:500;font-size:14px;color:#424040;text-align:center;">
                        You're receiving this email because you have an account with ${companyName}.<br>
                        If you didn't request this, please contact our support team.
                      </p>
  
                      <!-- Company Info -->
                      <div class="t30" style="mso-line-height-rule:exactly;line-height:30px;font-size:1px;display:block;">&nbsp;</div>
                      <table role="presentation" cellpadding="0" cellspacing="0" style="width:318px;background-color:#F2EFF3;border-radius:8px;">
                        <tr><td style="padding:20px 30px;">
                          <p style="margin:0;font-family:Albert Sans,sans-serif;line-height:18px;font-weight:500;font-size:12px;color:#84828E;text-align:center;">
                            ${companyName} - Secure Communication Platform<br>
                            © ${new Date().getFullYear()} ${companyName}. All rights reserved.
                          </p>
                        </td></tr>
                      </table>
                    </td></tr>
                  </table>
                </td></tr>
            </table>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </div>
  </body>
  </html>`;
};
