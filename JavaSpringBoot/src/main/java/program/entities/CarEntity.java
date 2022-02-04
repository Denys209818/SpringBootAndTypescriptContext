package program.entities;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "tblCars")
@ToString()
@Data
public class CarEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    @Column(length = 200, nullable = false)
    private String Name;
    @Column(length = 800, nullable = false)
    private String Description;
    @Column(nullable = false)
    private int Price;
}
