import java.awt.*;
import javax.swing.*;

public class Portrait extends JPanel {

    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2d = (Graphics2D) g;

        // Set the background color
        setBackground(new Color(255, 229, 180));

        // Draw the head
        g2d.setPaint(new Color(255, 218, 185));
        g2d.fillOval(100, 100, 200, 250);

        // Draw the eyes
        g2d.setPaint(Color.BLACK);
        g2d.fillOval(150, 170, 40, 40);
        g2d.fillOval(210, 170, 40, 40);

        // Draw the nose
        g2d.setStroke(new BasicStroke(4));
        g2d.drawArc(175, 230, 50, 50, 180, 180);

        // Draw the mouth
        g2d.setPaint(new Color(220, 20, 60));
        g2d.fillArc(160, 280, 80, 50, 0, -180);

        // Draw the hair
        g2d.setPaint(new Color(139, 69, 19));
        g2d.fillRect(80, 90, 240, 40);
        g2d.fillOval(100, 50, 80, 80);
        g2d.fillOval(220, 50, 80, 80);
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Portrait");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        Portrait panel = new Portrait();
        frame.add(panel);
        frame.setSize(400, 500);
        frame.setVisible(true);
    }
}
