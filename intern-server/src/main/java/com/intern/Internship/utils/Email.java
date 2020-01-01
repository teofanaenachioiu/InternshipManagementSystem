package com.intern.Internship.utils;

import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;

public class Email {

    private static String username = "contact.biru.software"; // GMail user name (just the part before "@gmail.com")
    private static String password = "admin@biru"; // GMail password

    /**
     * Send mail from a default adress (username@gamil.com) to recipient
     * 
     * @param subject   Mail subject
     * @param body      Mail Body
     * @param recipient Destination mail
     */
    public static void sendMail(String subject, String body, String recipient) {
        String from = username;
        String pass = password;

        sendFromGMail(from, pass, recipient, subject, body);
    }

    private static void sendFromGMail(String from, String pass, String to, String subject, String body) {
        Properties props = System.getProperties();
        String host = "smtp.gmail.com";
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.user", from);
        props.put("mail.smtp.password", pass);
        props.put("mail.smtp.port", "587");
        props.put("mail.smtp.auth", "true");

        Session session = Session.getDefaultInstance(props);
        MimeMessage message = new MimeMessage(session);

        try {
            message.setFrom(new InternetAddress(from));
            InternetAddress toAddress = new InternetAddress(to);

            message.addRecipient(Message.RecipientType.TO, toAddress);

            message.setSubject(subject);
            message.setText(body);
            Transport transport = session.getTransport("smtp");
            transport.connect(host, from, pass);
            transport.sendMessage(message, message.getAllRecipients());
            transport.close();
        } catch (AddressException ae) {
            ae.printStackTrace();
        } catch (MessagingException me) {
            me.printStackTrace();
        }
    }
}