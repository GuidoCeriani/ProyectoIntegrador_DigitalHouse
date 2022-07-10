package com.dh.digitalbooking.model;

import lombok.*;
import org.apache.commons.lang3.builder.HashCodeExclude;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Data
@Table(name = "features")
@NoArgsConstructor
@AllArgsConstructor
public class Feature implements BaseEntity {
    @Id
    @Type(type = "uuid-char")
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    private UUID id;
    private String name;

    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @ManyToMany(mappedBy = "features", fetch = FetchType.EAGER)
    private Set<Product> productSet = new HashSet<>();

    public void addProduct(Product product) {
        this.productSet.add(product);
    }
}
